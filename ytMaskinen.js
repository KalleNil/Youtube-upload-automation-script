//låter oss skapa en delay i ms med await sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//huvuddelen, loopar 80 gånger och byter sida 2 gånger
for(let i = 0; i<5; i++){
    for(let x = 0; x<80; x++){
        try {
            await sleep(800);
            document.querySelector('.edit-draft-button.style-scope.ytcp-video-list-cell-actions').click();
            await sleep(500);
            document.getElementById('next-button').click();
            await sleep(500);
            document.getElementById('next-button').click();
            await sleep(500);
            document.getElementById('next-button').click();
            await sleep(500);
            document.getElementById('done-button').click();
            await sleep(3500);
            document.getElementById('close-icon-button').click();
            await sleep(500);    
          }
          catch(err) {
              console.log("ruben :(");
          }
      
    }
    try{
        document.getElementById('navigate-after').click();
        await sleep(800);
    }catch{

    }
    
}
