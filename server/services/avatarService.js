const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const util = require("util");
const path = require("path");
const fs = require("fs");

const fsunlink = util.promisify(fs.unlink);

class AvatarService {
  constructor() {
    this.createDirectory();
    const directory = path.join(__dirname, "../data/avatars");

    this.directory = directory;
  }

  async createDirectory() {
    const dataDirectory = path.join(__dirname, "../data");
    if (!fs.existsSync(dataDirectory)) {
      await fs.mkdirSync(dataDirectory);
    }

    const avatarsDirectory = path.join(dataDirectory, "/avatars");

    if (!fs.existsSync(avatarsDirectory)) {
      await fs.mkdirSync(avatarsDirectory);
    }
  }

  async store(buffer) {
    const filename = AvatarService.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(filepath);
    return filename;
  }

  async delete(filename) {
    return fsunlink(this.filepath(filename));
  }

  static filename() {
    return `${uuidv4()}.png`;
  }

  filepath(filename) {
    if (!fs.existsSync(this.directory)) {
      this.createDirectory();
    }
    return path.resolve(`${this.directory}/${filename}`);
  }
}

module.exports = AvatarService;
