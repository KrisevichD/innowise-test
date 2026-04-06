export default class StorageManager {
  static getArrayFromStorage(storageName) {
    let data = localStorage.getItem(storageName);
    return data ? JSON.parse(data) : [];
  }

  static setDataToStorage(storageName, data) {
    if (!data) return false;
    localStorage.setItem(storageName, JSON.stringify(data));
    return true;
  }
}
