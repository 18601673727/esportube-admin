const convertFileToBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file.rawFile);

  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

const addUploadFeature = requestHandler => (type, resource, params) => {
  if (
    (type === 'CREATE' && resource === 'ads') ||
    (type === 'UPDATE' && resource === 'ads') ||
    (type === 'CREATE' && resource === 'videos') ||
    (type === 'UPDATE' && resource === 'videos')
  ) {
    if (params.data.thumbnail) {
      // NEW CODE HERE (to upload just one file):
      const myFile = params.data.thumbnail;

      if (!myFile.hasOwnProperty('rawFile')) {
        return requestHandler(type, resource, params);
      }

      if (!myFile.rawFile instanceof File) {
        return Promise.reject('Error: Not a file...'); // Didn't test this...
      }

      return Promise.resolve(convertFileToBase64(myFile))
        .then(picture64 => ({
          src: picture64,
          title: `${myFile.title}`
        }))
        .then(transformedMyFile => requestHandler(type, resource, {
          ...params,
          data: {
            ...params.data,
            thumbnail: transformedMyFile
          }
        }));
    }
  }

  return requestHandler(type, resource, params);
};

export default addUploadFeature;