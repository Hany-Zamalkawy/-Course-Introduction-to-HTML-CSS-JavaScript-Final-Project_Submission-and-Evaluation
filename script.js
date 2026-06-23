document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const textInput = document.getElementById('rec-text');
    const recommendationValue = textInput.value.trim();

    if (recommendationValue !== "") {
        const newRecommendation = document.createElement('div');
        newRecommendation.className = 'recommendation';
        newRecommendation.textContent = `"${recommendationValue}" - Anonymous`;
        
        document.getElementById('recommendation-list').appendChild(newRecommendation);
        textInput.value = "";
        
        showPopup(true);
    }
});

function showPopup(show) {
    const modal = document.getElementById('popup-modal');
    if (show) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

document.getElementById('close-popup').addEventListener('click', function() {
    showPopup(false);
});