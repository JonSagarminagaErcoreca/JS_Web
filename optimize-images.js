const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración de optimización
const config = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 90,
    compressionLevel: 9,
    adaptiveFiltering: true
  },
  webp: {
    quality: 85,
    effort: 6
  }
};

// Función para obtener el tamaño del archivo
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

// Función para optimizar una imagen
async function optimizeImage(inputPath, outputPath) {
  try {
    const originalSize = getFileSize(inputPath);
    const ext = path.extname(inputPath).toLowerCase();
    
    let sharpInstance = sharp(inputPath);
    
    // Aplicar optimizaciones según el tipo de archivo
    if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg(config.jpeg);
    } else if (ext === '.png') {
      sharpInstance = sharpInstance.png(config.png);
    }
    
    // Aplicar optimizaciones generales
    sharpInstance = sharpInstance
      .resize(null, null, {
        withoutEnlargement: true,
        fastShrinkOnLoad: true
      })
      .sharpen()
      .normalize();
    
    await sharpInstance.toFile(outputPath);
    
    const optimizedSize = getFileSize(outputPath);
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB (${savings}% reducción)`);
    
    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error.message);
    return null;
  }
}

// Función para procesar todas las imágenes
async function optimizeAllImages() {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const assetsDir = './assets';
  
  // Encontrar todas las imágenes
  const findImages = (dir) => {
    const images = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        images.push(...findImages(fullPath));
      } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
        images.push(fullPath);
      }
    }
    
    return images;
  };
  
  const images = findImages(assetsDir);
  console.log(`🔍 Encontradas ${images.length} imágenes para optimizar...\n`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;
  
  for (const imagePath of images) {
    const result = await optimizeImage(imagePath, imagePath);
    
    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
      processedCount++;
    }
  }
  
  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log(`\n📊 RESUMEN DE OPTIMIZACIÓN:`);
  console.log(`   Imágenes procesadas: ${processedCount}/${images.length}`);
  console.log(`   Tamaño original: ${(totalOriginalSize/1024/1024).toFixed(2)}MB`);
  console.log(`   Tamaño optimizado: ${(totalOptimizedSize/1024/1024).toFixed(2)}MB`);
  console.log(`   Ahorro total: ${totalSavings}% (${((totalOriginalSize - totalOptimizedSize)/1024/1024).toFixed(2)}MB)`);
}

// Ejecutar optimización
optimizeAllImages().catch(console.error);
