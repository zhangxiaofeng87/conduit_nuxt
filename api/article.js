import { request } from "@/plugins/request";

// 获取公共的文章列表
export const getArticles = (params) => {
  return request({
    method: "GET",
    url: "/api/articles",
    params,
  });
};

// 获取自己的文章列表
export const getSelfArticles = (params) => {
  return request({
    method: "GET",
    url: "/api/articles/feed",
    params,
  });
};

// 获取标签列表
export const getTags = (params) => {
  return request({
    method: "GET",
    url: "/api/tags",
    params,
  });
};
// 获取文章详情
export const getArticleDetail = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}
// 新增文章
export const createArticle = params => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data: params
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}
// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}
