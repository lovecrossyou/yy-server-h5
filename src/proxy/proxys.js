const express = require('express');
const router = express.Router();
const proxy = require('http-proxy-middleware');

// 代理服务
router.use('/api', proxy({
    target: 'http://127.0.0.1:3333',
    changeOrigin: true,
    pathRewrite: { "^/api" : "" }
}));

module.exports = router;
