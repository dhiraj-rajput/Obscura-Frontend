const API_BASE = 'http://localhost:8000';

export const api = {
  async getGraphData() {
    const response = await fetch(`${API_BASE}/graph`);
    if (!response.ok) throw new Error('Failed to fetch graph data');
    const result = await response.json();
    
    // Filter out null entries and return top 5
    return result.data
      .filter(item => item.fileType !== null)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  },

  async encryptFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE}/encode`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Encryption failed');
    const data = await response.json();
    return {
      accessUrl: data.accessUrl,
      keyImageDataUrl: data.keyImageDataUrl,
      keyImageName: data.keyImageName,
    };
  },

  async decryptFile(fileUrl, keyFile) {
    const formData = new FormData();
    formData.append('fileUrl', fileUrl);
    formData.append('file', keyFile);

    const response = await fetch(`${API_BASE}/decode`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Decryption failed');
    return response.blob();
  },
};
