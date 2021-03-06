const express = require('express');
const router = express.Router();
const proxy = require('http-proxy-middleware');

// 代理服务
router.use('/client', proxy({
    target: 'http://47.94.209.108:7002',
    changeOrigin: true,
    pathRewrite: { "^/client" : "" }
}));

router.use('/api', proxy({
    target: 'http://47.94.169.143:3333',
    changeOrigin: true,
    pathRewrite: { "^/api" : "" }
}));

module.exports = router;
