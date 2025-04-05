import log from "loglevel";

// 导出logger
const logger = log;

// 设置日志级别
const logLevel = process.env.NODE_ENV === "production" ? "info" : "debug";
logger.setLevel(logLevel);

// 自定义前缀插件
const originalFactory = logger.methodFactory;

logger.methodFactory = (methodName, logLevel, loggerName) => {
  const rawMethod = originalFactory(methodName, logLevel, loggerName);

  return (message, ...args) => {
    const time = new Date().toISOString();
    const level = methodName.toUpperCase();
    rawMethod(`[${time}] [${level}] ['mscloud-web'] ${message}`, ...args);
  };
};

// 重新应用方法工厂
logger.setLevel(logger.getLevel());

// 导出logger
export default logger;
