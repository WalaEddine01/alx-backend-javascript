export default function loadBalancer(chinaDownload, USDownload) {
  const all = [];
  all.push(chinaDownload, USDownload);
  return Promise.race(all);
}
