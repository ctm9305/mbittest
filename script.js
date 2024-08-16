document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mbti-form");
    const resultSection = document.getElementById("result");
    const resultType = document.getElementById("result-type");
    const retryBtn = document.getElementById("retry-btn");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // 기본 제출 동작 방지

        // 질문 응답 수집
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = parseInt(value);
        });

        // MBTI 계산 로직
        const eiScore = (data["EI1"] || 0) - (data["IE2"] || 0);
        const snScore = (data["SN1"] || 0) - (data["NS2"] || 0);
        const tfScore = (data["TF1"] || 0) - (data["FT2"] || 0);
        const jpScore = (data["JP1"] || 0) - (data["PJ2"] || 0);

        const mbtiType = (
            (eiScore > 0 ? "E" : "I") +
            (snScore > 0 ? "S" : "N") +
            (tfScore > 0 ? "T" : "F") +
            (jpScore > 0 ? "J" : "P")
        );

        // 결과 표시
        form.style.display = "none";
        resultSection.style.display = "block";
        resultType.textContent = mbtiType;
    });

    retryBtn.addEventListener("click", () => {
        form.style.display = "block";
        resultSection.style.display = "none";
        form.reset();
    });
});
