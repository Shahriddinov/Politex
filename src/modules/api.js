import { http } from "../servises";

export const Corruption = () => http.request.get("/api/corruptionmens");

export const CorruptionSingle = ({ id }) => http.request.get(`/api/corruptionsectors/${id}`);

export const NewsList = () => http.request.get("/public/api/nams/count/15");

export const NewsHomeList = () => http.request.get("/public/api/nams");

export const NewsSingle = ({ id }) => http.request.get(`/public/api/nams/${id}`);

export const Graduats = () => http.request.get("/public/api/graduats");

export const UsifulLinks = () => http.request.get("/public/api/bussins");

export const Networks = () => http.request.get("/public/api/networks");

export const Workers = () => http.request.get("/public/api/workers");

export const Rectoret = () => http.request.get("/public/api/rectorats");

export const FinansActivity = () => http.request.get("/public/api/acts");

export const Facultet = () => http.request.get("/public/api/facults");

export const Swiper = () => http.request.get("/public/api/sliders");

export const InterActive = () => http.request.get("/public/api/interactivservs");

export const RectorCongratPage = () => http.request.get("/public/api/congratulations");

export const Nizom = () => http.request.get("/public/api/nizom");

export const NeedDocs = () => http.request.get("/public/api/architecturals");

export const History = () => http.request.get("/public/api/histors");

export const Virtual = data => http.request.post("/api/add/receptions", data);
