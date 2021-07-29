import logo from './styles/images/logo.svg';

const songcardProps = {
    "title": "Test Title",
    "price": "9.00",
    "artist": "Test Artist",
    "listens": "100"
};

const dropdownProps = {
    "header": "What’s a DVR (digital vinyl record)?",
    "body": "Take the painting of the Mona Lisa, for example. It is copied, photographed, and distributed everywhere, but there's only one original physical painting. This gives the original painting and its owner incredible value due to its rarity. Non-Fungible Tokens do this for digital creations like art, games, and in our case, music."
};

const noBorderProps = {
    "filename": logo,
    "caption": "LOGO - NO BORDER"
};

const borderProps = {
    "filename": logo,
    "caption": "LOGO - WITH BORDER",
    "border": true
};

const noCaptionProps = {
    "filename": logo,
    "border": true
}

const noCaptionNoBorderProps = {
    "filename": logo
}

const expandableTextProps = { 
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a suscipit mi, nec vestibulum nisi. Mauris vel imperdiet ex, quis ultricies sem. Duis rutrum lorem mauris, eu cursus orci cursus non. Curabitur accumsan non nisl nec scelerisque. Integer molestie velit.  Vivamus elementum felis et orci vulputate, et dictum nisi dignissim. Phasellus suscipit nec risus id tempor. Maecenas luctus ut libero et luctus. Proin lobortis est et ante dapibus interdum. Vivamus porta imperdiet egestas. Nulla ultricies commodo urna, et hendrerit lorem lacinia eu. Suspendisse feugiat at nulla vitae dapibus.",
    "collapsedHeight": 120
}

export { songcardProps, dropdownProps, noBorderProps, borderProps, noCaptionProps, noCaptionNoBorderProps, expandableTextProps };