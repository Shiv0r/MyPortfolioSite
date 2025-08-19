//ts-check

//===============GLOBAL-VARIABLE===============
const getProjectsEl = document.getElementById('projects');


//===============HELPER-FUNCTION===============
function hideVideo(figureElement)
{
    figureElement.firstElementChild.removeAttribute('autoplay')
    figureElement.classList.add('is-hidden');
    figureElement.firstElementChild.pause()
}

function showVideo(figureElment)
{
    figureElment.classList.remove('is-hidden');
    figureElment.firstElementChild.setAttribute('autoplay', '')
    figureElment.firstElementChild.play();
}


//===============LOGIC===============
getProjectsEl.addEventListener('click', (btn) => 
{
    const isButtonHTMLElement = btn.target instanceof HTMLButtonElement;
    if(!isButtonHTMLElement) return;

    //deselect all buttons
    const toggleCollection = document.querySelectorAll('.is-toggled');
    const isAlreadySelected = btn.target.classList.contains('is-toggled');

    toggleCollection.forEach(toggleElement =>
    {
        const isToggleHTMLElement = toggleElement instanceof HTMLButtonElement
        if(!isToggleHTMLElement && isAlreadySelected) return;

        toggleElement.classList.remove('is-toggled');
    });

    //toggle button 
    if(!isAlreadySelected)
    {
        btn.target.classList.add('is-toggled');
    }

    //button logic hide/show video
    const btnHairShaderEl = document.getElementById('btn-hair-shader')
    const btnAnimeShaderEl = document.getElementById('btn-anime-shader')
    const videoHairShader = document.getElementById('video-hair-shader');
    const videoAnimeShader = document.getElementById('video-anime-shader');

    if(btn.target === btnHairShaderEl)
    {
        hideVideo(videoAnimeShader);
        showVideo(videoHairShader);
    }
    else if(btn.target === btnAnimeShaderEl)
    {
        hideVideo(videoHairShader);
        showVideo(videoAnimeShader);
    }

    if(isAlreadySelected)
    {
        hideVideo(videoHairShader);
        hideVideo(videoAnimeShader);
    }
});
