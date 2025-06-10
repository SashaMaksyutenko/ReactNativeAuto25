import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const _dirname = path.dirname(fileURLToPath(import.meta.url));
console.log("multer")
const uploadDir = path.join(_dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadDir),
  filename: (_, file, cb) => {
    const ext=path.extname(file.originalname);
    cb(null,`${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`)
  }
});
const fileFilter=(_, file, cb) => {
    console.log('file filter',file.originalname, file.mimetype);
    file.mimetype.startsWith('image/') ? cb(null, true) : cb(new Error('Only image files are allowed!',false));
}
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
})
export default upload