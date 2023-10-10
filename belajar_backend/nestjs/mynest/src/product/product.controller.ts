import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { diskStorage } from 'multer';
import { createProductDto, updateProductDto } from './productdto.dto';
import * as fs from 'fs';
import { FileInterceptor } from '@nestjs/platform-express';
import { errorHandling } from 'src/helper/errorHandling';

const allowedFileExtentions = ['jpg', 'JPG', 'png', 'PNG', 'jpeg'];
const filefilteroptions = (req: any, file: any, cb: any) => {
  const ext = file.originalname.split('.').pop();
  const maxSize = 1 * 1024 * 1024;
  const cekExt = /.pdf|.exe|.run/;
  // console.log(file);
  console.log(file.originalname.match(cekExt));

  if (file.originalname.match(cekExt)) {
    console.log('masuk');
    req.errorvalidatefile = 'Tidak boleh memasukkan file yang mencurigakan!';
    return cb(null, false);
  }
  if (allowedFileExtentions.includes(ext)) {
    if (req.headers['content-length'] > maxSize) {
      req.errorvalidatefile = 'Hanya boleh masukkan gambar kurang dari 1 MB!';
      cb(null, false);
    } else {
      cb(null, true);
    }
  } else {
    req.errorvalidatefile = 'Hanya boleh image: jpg, png, dan jpeg';
    cb(null, false);
  }
};

const MulterOptions = {
  storage: diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      const configsufix = Math.round(Math.random() * 1e9);
      const ext = file.originalname.split('.').pop();
      cb(null, file.fieldname + configsufix + '.' + ext);
    },
  }),
  fileFilter: filefilteroptions,
};

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() fields: createProductDto) {
    return this.productService.create(fields);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', MulterOptions))
  createUpload(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
    @Body() fields: createProductDto,
  ) {
    try {
      if (req.errorvalidatefile) {
        throw new Error(req.errorvalidatefile);
      }
      if (file) {
        fields.image =
          req.protocol + '://' + req.get('host') + '/product/' + file.filename;
      } else {
        fields.image =
          req.protocol + '://' + req.get('host') + '/product/no-image.png';
      }
      // return { namafile: file.filename, data: createProductDto };

      return this.productService.createUpload(fields);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  @Patch('upload/:id')
  @UseInterceptors(FileInterceptor('image', MulterOptions))
  updateUpload(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
    @Body() fields: updateProductDto,
  ) {
    const oldImageBody = fields.oldimage;
    const oldImageName = oldImageBody.split('/').pop();
    try {
      if (req.errorvalidatefile) {
        throw new Error(req.errorvalidatefile);
      }
      if (file) {
        fields.image = `${req.protocol}://${req.hostname}:${process.env.PORT}/product/${file.filename}`;

        if (oldImageName !== 'no-image.png') {
          fs.unlinkSync(`./uploads/${oldImageName}`);
        }
      } else {
        if (!fields.image) {
          // punya iqbal
          fields.image = `${req.protocol}://${req.get(
            'host',
          )}/product/no-image.png`;
          // fields.image = `${req.protocol}://${req.hostname}:${process.env.PORT}/product/${oldImageName}`;

          if (oldImageName !== 'no-image.png') {
            fs.unlinkSync(`./uploads/${oldImageName}`);
          }
        }
      }
      return this.productService.updateUpload(+id, fields);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  @Delete('upload/:id')
  removeUpload(@Param('id') id: string, @Body() filename: any) {
    console.log(filename);
    if (filename.path !== 'no-image.png') {
      const path = './uploads/' + filename.path;
      fs.unlinkSync(path);
    }
    return this.productService.removeUpload(+id);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':imgpath')
  getImage(@Param('imgpath') img: any, @Res() res: any) {
    res.sendFile(img, { root: './uploads' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() fields: updateProductDto) {
    return this.productService.update(+id, fields);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
