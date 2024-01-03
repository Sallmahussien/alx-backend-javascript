export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload])
    .then((SuccessData) => SuccessData)
    .catch((errors) => Promise.reject(errors[0]));
}
