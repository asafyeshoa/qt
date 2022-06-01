import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function StandardImageList() {
    const matches = useMediaQuery('(min-width:420px)');
    return (
        <ImageList sx={{ width: 400 }} cols={matches ? 3 : 1} rowHeight={matches ? 164 : 400}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={item.img}
                        srcSet={item.img}
                        alt={item.title}
                        loading="lazy"
                        style={{height: '100%', width: '100%'}}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://i.ibb.co/tQ4HFd9/Whats-App-Image-2022-06-01-at-09-29-51.jpg',
        title: 'one',
    },
    {
        img: 'https://i.ibb.co/Dw2qKhq/Whats-App-Image-2022-06-01-at-09-28-51.jpg',
        title: 'two',
    },
    {
        img: 'https://i.ibb.co/WV9Hzq1/Whats-App-Image-2022-06-01-at-09-29-12.jpg',
        title: 'three',
    },
    {
        img: 'https://i.ibb.co/gR3zH2N/Whats-App-Image-2022-06-01-at-09-28-24.jpg',
        title: 'four',
    },
    {
        img: 'https://i.ibb.co/qRm10Fj/Whats-App-Image-2022-06-01-at-09-30-15.jpg',
        title: 'five',
    },
    {
        img: 'https://i.ibb.co/VvdqcXf/Whats-App-Image-2022-06-01-at-09-33-36.jpg',
        title: 'six',
    },
    {
        img: 'https://i.ibb.co/fnCYQmx/Whats-App-Image-2022-06-01-at-09-37-12.jpg',
        title: 'seven',
    },
    {
        img: 'https://i.ibb.co/V2BBysx/Whats-App-Image-2022-06-01-at-09-38-01.jpg',
        title: 'eight',
    },
    {
        img: 'https://i.ibb.co/G28cSQj/Whats-App-Image-2022-06-01-at-09-41-04.jpg',
        title: 'nine',
    }
];

