import { get } from "lodash";

export const News = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    img1: get(item, "image_1") || "",
    img2: get(item, "image_2") || "",
    title: {
      uz: get(item, "title_uz") || "",
      ru: get(item, "title_ru") || "",
      en: get(item, "title_en") || ""
    },
    content: {
      uz: get(item, "text_uz") || "",
      ru: get(item, "text_ru") || "",
      en: get(item, "text_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};

export const Granduates = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    name: {
      uz: get(item, "name_uz") || "",
      ru: get(item, "name_ru") || "",
      en: get(item, "name_en") || ""
    },
    position: {
      uz: get(item, "position_uz") || "",
      ru: get(item, "position_ru") || "",
      en: get(item, "position_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};

export const Swiper = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    name: {
      uz: get(item, "title_uz") || "",
      ru: get(item, "title_ru") || "",
      en: get(item, "title_en") || ""
    },
    content: {
      uz: get(item, "text_uz") || "",
      ru: get(item, "text_ru") || "",
      en: get(item, "text_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};

export const Facultet = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    name: {
      uz: get(item, "menu_uz") || "",
      ru: get(item, "menu_ru") || "",
      en: get(item, "menu_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};

export const RectoratCongratPage = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    content: {
      uz: get(item, "text_uz") || "",
      ru: get(item, "text_ru") || "",
      en: get(item, "text_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};

export const History = item => {
  return {
    id: get(item, "id") || "",
    imgs: JSON.parse(get(item, "imgs")) || [],
    content: {
      uz: get(item, "text_uz") || "",
      ru: get(item, "text_ru") || "",
      en: get(item, "text_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};

export const InterActive = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    title: {
      uz: get(item, "title_uz") || "",
      ru: get(item, "title_ru") || "",
      en: get(item, "title_en") || ""
    },
    subTitle: {
      uz: get(item, "subtitle_uz") || "",
      ru: get(item, "subtitle_ru") || "",
      en: get(item, "subtitle_en") || ""
    },
    link: get(item, "link") || "",
    createdAt: get(item, "created_at") || ""
  };
};

export const UsifulLikns = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    text: {
      uz: get(item, "text_uz") || "",
      ru: get(item, "text_ru") || "",
      en: get(item, "text_en") || ""
    },
    link: get(item, "address") || "",
    createdAt: get(item, "created_at") || ""
  };
};

export const Networks = item => {
  return {
    id: get(item, "id") || "",
    telegram: get(item, "telegram") || "",
    instagram: get(item, "instagram") || "",
    twitter: get(item, "twitter") || "",
    facebook: get(item, "facebook") || "",
    vkontakte: get(item, "vkontakte") || "",
    createdAt: get(item, "created_at") || ""
  };
};

export const Workers = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    name: {
      uz: get(item, "name_uz") || "",
      ru: get(item, "name_ru") || "",
      en: get(item, "name_en") || ""
    },
    degree: {
      uz: get(item, "degree_uz") || "",
      ru: get(item, "degree_ru") || "",
      en: get(item, "degree_en") || ""
    },
    phone: get(item, "phone") || "",
    email: get(item, "email") || "",
    createdAt: get(item, "created_at") || ""
  };
};

export const FinansActivity = item => {
  return {
    id: get(item, "id") || "",
    content: {
      uz: get(item, "text_uz") || "",
      ru: get(item, "text_ru") || "",
      en: get(item, "text_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};

export const Rectorat = item => {
  return {
    id: get(item, "id") || "",
    img: get(item, "img") || "",
    name: {
      uz: get(item, "name_uz") || "",
      ru: get(item, "name_ru") || "",
      en: get(item, "name_en") || ""
    },
    position: {
      uz: get(item, "position_uz") || "",
      ru: get(item, "position_ru") || "",
      en: get(item, "position_en") || ""
    },
    time: {
      uz: get(item, "time_uz") || "",
      ru: get(item, "time_ru") || "",
      en: get(item, "time_en") || ""
    },
    degree: {
      uz: get(item, "degree_uz") || "",
      ru: get(item, "degree_ru") || "",
      en: get(item, "degree_en") || ""
    },
    phone: get(item, "phone") || "",
    email: get(item, "email") || "",
    createdAt: get(item, "created_at") || ""
  };
};

export const Meta = item => {
  return {
    total: get(item, "total_items") || 0,
    totalPage: get(item, "total_page") || 0,
    current: get(item, "current_page") || 0
  };
};

export const Corruption = item => {
  return {
    id: get(item, "id") || "",
    title: {
      uz: get(item, "menu_uz") || "",
      ru: get(item, "menu_ru") || "",
      en: get(item, "menu_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};

export const CorruptionSingle = item => {
  return {
    id: get(item, "id") || "",
    title: {
      uz: get(item, "menu_uz") || "",
      ru: get(item, "menu_ru") || "",
      en: get(item, "menu_en") || ""
    },
    content: {
      uz: get(item, "text_uz") || "",
      ru: get(item, "text_ru") || "",
      en: get(item, "text_en") || ""
    },
    createdAt: get(item, "created_at") || ""
  };
};
