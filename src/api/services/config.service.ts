class ConfigService {
  getStaticFileUrl(file: string) {
    const url = !file.startsWith('http') ? `http://localhost:3010/api/storage/${file}` : file;
    return url;
  }
}

export const configService = new ConfigService();
