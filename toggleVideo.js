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
    const alreadySelected = btn.target.classList.contains('is-toggled');
    const videoHairShader = document.getElementById('video-hair-shader');
    const videoAnimeShader = document.getElementById('video-anime-shader');

    toggleCollection.forEach(toggleElement =>
    {
        const isToggleHTMLElement = toggleElement instanceof HTMLButtonElement
        if(!isToggleHTMLElement && alreadySelected) return;

        toggleElement.classList.remove('is-toggled');
    });

    //toggle button logic
    if(!alreadySelected)
    {
        btn.target.classList.add('is-toggled');
    }

    const btnHairShaderEl = document.getElementById('btn-hair-shader')
    const btnAnimeShaderEl = document.getElementById('btn-anime-shader')
    

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

    toggleCollection.forEach(toggleElement =>
    {
        const isToggleHTMLElement = toggleElement instanceof HTMLButtonElement
        if(isToggleHTMLElement && !alreadySelected) return;

        hideVideo(videoHairShader);
        hideVideo(videoAnimeShader);
    });
});
