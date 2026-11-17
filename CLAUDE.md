# Movie Vibes 推薦電影網頁 - AI 協作指南

## 專案目的 (Project Purpose)
建立一個簡約、高質感的電影推薦網頁，用來展示個人的精選片單。網站需維持輕量化，不依賴複雜的前端框架。

## 網頁整體風格 (Design & Style)
- **主題 (Theme)**：深色模式 (Dark Theme)，營造電影院的沉浸感。背景色使用 `#121212`，卡片背景 `#1E1E1E`，文字使用 `#E0E0E0`。
- **排版 (Layout)**：使用 CSS Grid (卡片式設計)，確保在手機與電腦版皆能完美響應 (Responsive Design)。
- **視覺焦點**：電影海報需有 hover 放大效果，提升互動感。

## 專案結構與檔案放置 (Project Structure)
專案採取「資料與視圖分離」架構：
- `index.html` - 主頁面與網站框架 (UI 骨架)
- `style.css` - 網頁樣式表 (視覺設計)
- `data.js` - 存放電影資料 (純 JavaScript Array)
- `app.js` - 負責讀取 `data.js` 並渲染到 `index.html` 上
- `CLAUDE.md` - AI 開發與維護規則

## 新增內容規則 (Content Formatting Rules)
**【重要】** 當需要「新增一部推薦電影」時，絕對不能直接修改 `index.html`。
請依照以下格式，將新電影加入到 `data.js` 的 `movies` 陣列中：
```javascript
{
  title: "電影名稱",
  year: "年份",
  genre: ["類型1", "類型2"],
  rating: 9.5, // 滿分 10
  image: "圖片網址 (請優先使用 TMDB 或 Unsplash)",
  review: "簡短的推薦理由與觀影心得..."
}