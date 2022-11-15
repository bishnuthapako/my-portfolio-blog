import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'

function ImageGallery() {
  return (
   <>
    <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
            alt="Breakfast"
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
            alt="Burger"
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
            alt="Camera"
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
            alt="Coffee"
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1533827432537-70133748f5c8'
            alt="Hats"
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'
            alt="Honey"
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'
            alt="Basketball"
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'
            alt="Fern"
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25'
            alt="Mushrooms"
          />
        </ImageListItem>
    </ImageList>
   </>
  )
}

export default ImageGallery