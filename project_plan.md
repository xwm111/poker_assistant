# 德州扑克手牌分析工具项目计划 (最终版)

**项目目标:**

开发一个 Web 应用，用于德州扑克手牌分析，主要功能包括手牌范围分析和行动推荐。

**技术栈:**

*   **前端:** Next.js 15, TypeScript, Tailwind CSS 4, lucide-react (Icon 组件库)
*   **后端:** Next.js App Router (Node.js 20), OpenAI API

**项目约定:**

*   **开发框架:** Next.js 15, Node.js 20, Tailwind CSS 4
*   **编程语言:** TypeScript
*   **单元测试框架:** Playwright (测试用例放置在 `/src/tests` 目录下)
*   **类型定义:** 所有类型定义放置在 `/src/types/module.d.ts` 文件中
*   **模拟数据:** 模拟数据放置在 `/src/mockdata/{modules}` 目录下，使用 mockjs 生成
*   **API 定义:** API 定义放置在 `/src/app/api/{module}` 目录下，文件名为 `route.ts` (Next.js App Router)
*   **日志组件:**  统一使用 `logger.debug` (从 `@/libs/logger` 导入)
*   **Icon 组件库:** lucide-react
*   **文件大小限制:** 每个 `.ts` 文件不超过 600 行

**详细计划步骤:**

1.  **后端逻辑集成到 Next.js App Router (Node.js 20 + OpenAI API):**
    *   **API 路由创建:** 在 `src/app/api` 目录下创建 `analyze` 目录，并在其中创建 `route.ts` 文件 (`/api/analyze`)。
    *   **OpenAI API 集成 (在 `src/app/api/analyze/route.ts` 中):**
        *   使用 `dotenv` 管理 OpenAI API 密钥。
        *   引入 `openai` 库，配置 OpenAI API 密钥。
        *   设计 Prompt，将牌局信息组织成 Prompt，发送给 OpenAI API 进行手牌范围和行动分析。
        *   调用 OpenAI API 并处理返回结果，提取手牌范围和行动建议。
        *   编写数据处理和分析逻辑，将 OpenAI API 返回结果整理成结构化数据。
        *   添加错误处理和日志记录 (使用 `logger.debug`)。

2.  **前端开发 (Next.js 15 + TypeScript + Tailwind CSS 4):**
    *   **UI 组件库:** 使用 `lucide-react` 作为 Icon 组件库。
    *   **项目结构及目录约定:** 遵循项目约定。
    *   **UI 组件开发:**
        *   **`HandInput.tsx` (牌局信息输入组件):** 使用 Next.js, Tailwind CSS 和 `lucide-react` 构建用户友好的表单，用于输入公共牌、玩家位置、玩家行动等信息。
        *   **`AnalysisResult.tsx` (分析结果展示组件):** 使用 Next.js, Tailwind CSS 和 `lucide-react` 清晰地展示后端 API 返回的分析结果，包括手牌范围、行动建议等。
    *   **前端逻辑开发:**
        *   **API 调用:** 前端组件直接调用 Next.js API 路由 `/api/analyze`。
        *   **状态管理:** 初期使用 React 组件 state，后续根据需要考虑 Zustand。
    *   **样式和主题:** 使用 Tailwind CSS 进行全局样式设置和主题定制。

3.  **单元测试:**
    *   使用 `playwright` 进行单元测试，测试用例文件放置在 `/src/tests` 目录下。
    *   测试核心业务逻辑和组件，例如手牌分析逻辑、API 调用、UI 组件渲染等。

4.  **文件大小约定:**
    *   每个 `.ts` 文件的长度不超过 600 行。

**项目结构:**

```
poker_assistant/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── analyze/
│   │   │       └── route.ts  (API 路由 - 后端逻辑)
│   │   ├── page.tsx
│   │   └── ...
│   ├── components/
│   │   └── poker-analyzer/
│   │       ├── HandInput.tsx
│   │       └── AnalysisResult.tsx
│   ├── libs/
│   │   ├── logger.ts
│   │   └── poker-evaluator.ts (可能用处不大)
│   ├── mockdata/
│   │   └── ...
│   ├── tests/
│   │   └── ...
│   ├── types/
│   │   └── module.d.ts
│   └── ...
├── ...
```

**下一步行动:**

1.  **后端 (Next.js API 路由):**
    *   在 `src/app/api/analyze/route.ts` 中创建 API 路由文件。
    *   在 `route.ts` 中集成 OpenAI API，并设计 Prompt。
2.  **前端:**
    *   确认 Next.js 版本为 15，Tailwind CSS 版本为 4。
    *   安装 `lucide-react`。
    *   创建 `src/components/poker-analyzer/HandInput.tsx` 和 `AnalysisResult.tsx` 组件的基本结构，使用 Tailwind CSS 和 `lucide-react` 进行初步布局。
    *   将前端组件集成到 `src/app/page.tsx` 页面。
3.  **前后端联调:** 进行初步的前后端联调，测试 API 接口和数据交互 (前端调用 Next.js API 路由)。

**准备开始实施计划！**