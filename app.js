document.addEventListener("DOMContentLoaded", () => {
    const movieGrid = document.getElementById("movie-grid");

    // 迴圈讀取 data.js 中的電影資料並產生 HTML
    movies.forEach(movie => {
        // 產生標籤 HTML
        const tagsHtml = movie.genre.map(g => `<span class="tag">${g}</span>`).join("");
        
        // 建立卡片內容
        const cardHtml = `
            <div class="movie-card">
                <img src="${movie.image}" alt="${movie.title}" class="movie-image">
                <div class="movie-info">
                    <h2 class="movie-title">${movie.title}</h2>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span class="rating">★ ${movie.rating}</span>
                    </div>
                    <div class="tags">
                        ${tagsHtml}
                    </div>
                    <p class="review">${movie.review}</p>
                </div>
            </div>
        `;
        
        // 插入到頁面中
        movieGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
});