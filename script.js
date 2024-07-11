var imagesURL = ["photos/1.jpg", "photos/1-1.jpg", "photos/2.jpg", "photos/2-2.jpg", "photos/3.jpg", "photos/3-3.jpg", "photos/4.jpg", "photos/4-4.jpg", "photos/5.jpg", "photos/5-5.jpg", "photos/6.jpg", "photos/6-6.jpg", "photos/7.jpg", "photos/7-7.jpg", "photos/8.jpg", "photos/8-8.jpg", "photos/9.jpg", "photos/9-9.jpg", "photos/10.jpg", "photos/10-10.jpg"];
var logosURL = ["logos/1.jpg", "logos/2.jpg", "logos/3.jpg"];
var images = imagesURL.length;
var logos = logosURL.length;
let x = 0;
let y = 0;
let before = document.getElementById("before");
let after = document.getElementById("after");
before.src = imagesURL[2*x];
after.src = imagesURL[2*x + 1];
let logo = document.getElementById("logo");
logo.src = logosURL[y];

before.onload = function()
{
    let width = before.naturalWidth;
    let height = before.naturalHeight;

    if(width/height == 16 / 9)
    before.style.aspectRatio = 16 / 9;
    else
    before.style.aspectRatio = 4 / 3;
}

after.onload = function()
{
    let width = after.naturalWidth;
    let height = after.naturalHeight;

    if(width/height == 16 / 9)
    after.style.aspectRatio = 16 / 9;
    else
    after.style.aspectRatio = 4 / 3;
}

function nextPhoto()
{
    if((2*x)+1 < images-1)
        {
            x++;
            before.src = imagesURL[2*x];
            after.src = imagesURL[2*x + 1];

            before.onload = function()
            {
                let width = before.naturalWidth;
                let height = before.naturalHeight;

                if(width/height == 16 / 9)
                before.style.aspectRatio = 16 / 9;
                else
                before.style.aspectRatio = 4 / 3;
            }

            after.onload = function()
            {
                let width = after.naturalWidth;
                let height = after.naturalHeight;

                if(width/height == 16 / 9)
                after.style.aspectRatio = 16 / 9;
                else
                after.style.aspectRatio = 4 / 3;
            }
        }
    else
    {
        x=0;
        before.src = imagesURL[2*x];
        after.src = imagesURL[2*x + 1];

        before.onload = function()
        {
            let width = before.naturalWidth;
            let height = before.naturalHeight;

            if(width/height == 16 / 9)
            before.style.aspectRatio = 16 / 9;
            else
            before.style.aspectRatio = 4 / 3;
        }

        after.onload = function()
        {
            let width = after.naturalWidth;
            let height = after.naturalHeight;

            if(width/height == 16 / 9)
            after.style.aspectRatio = 16 / 9;
            else
            after.style.aspectRatio = 4 / 3;
        }
    }
}

function previousPhoto()
{
    if((2*x)+1 > 2)
        {
            x--;
            before.src = imagesURL[2*x];
            after.src = imagesURL[2*x + 1];

            before.onload = function()
            {
                let width = before.naturalWidth;
                let height = before.naturalHeight;

                if(width/height == 16 / 9)
                before.style.aspectRatio = 16 / 9;
                else
                before.style.aspectRatio = 4 / 3;
            }

            after.onload = function()
            {
                let width = after.naturalWidth;
                let height = after.naturalHeight;

                if(width/height == 16 / 9)
                after.style.aspectRatio = 16 / 9;
                else
                after.style.aspectRatio = 4 / 3;
            }

        }
    else
    {
        x=(images/2) - 1;
        before.src = imagesURL[2*x];
        after.src = imagesURL[2*x + 1];

        before.onload = function()
        {
            let width = before.naturalWidth;
            let height = before.naturalHeight;

            if(width/height == 16 / 9)
            before.style.aspectRatio = 16 / 9;
            else
            before.style.aspectRatio = 4 / 3;
        }

        after.onload = function()
        {
            let width = after.naturalWidth;
            let height = after.naturalHeight;

            if(width/height == 16 / 9)
            after.style.aspectRatio = 16 / 9;
            else
            after.style.aspectRatio = 4 / 3;
        }
    }
}

function nextLogo()
{
    if(y < logos-1)
        {
            y++;
            logo.src = logosURL[y];
        }
    else
    {
        y=0;
        logo.src = logosURL[y];
    }
}

function previousLogo()
{
    if(y < 1)
        {
            y = logos-1;
            logo.src = logosURL[y];
        }
    else
    {
        y--;
        logo.src = logosURL[y];
    }
}