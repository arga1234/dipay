import { SET_USER, UNSET_USER } from './action'

const initialState = {
    userData : undefined,
    sections : [
        { title: 'Technology', url: '#' },
        { title: 'Design', url: '#' },
        { title: 'Culture', url: '#' },
        { title: 'Business', url: '#' },
        { title: 'Politics', url: '#' },
        { title: 'Opinion', url: '#' },
        { title: 'Science', url: '#' },
        { title: 'Health', url: '#' },
        { title: 'Style', url: '#' },
        { title: 'Travel', url: '#' },
    ], 
    mainFeaturedPost : {
        title: 'Title of a longer featured blog post',
        description:
          "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
        linkText: 'Continue reading…',
    },
    featuredPosts: [
        {
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random',
          imageText: 'Image Text',
        },
        {
          title: 'Post title',
          date: 'Nov 11',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random',
          imageText: 'Image Text',
        },
    ],
    sidebar : {
        title: 'About',
        description:
          'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
        archives: [
          { title: 'March 2020', url: '#' },
          { title: 'February 2020', url: '#' },
          { title: 'January 2020', url: '#' },
          { title: 'November 1999', url: '#' },
          { title: 'October 1999', url: '#' },
          { title: 'September 1999', url: '#' },
          { title: 'August 1999', url: '#' },
          { title: 'July 1999', url: '#' },
          { title: 'June 1999', url: '#' },
          { title: 'May 1999', url: '#' },
          { title: 'April 1999', url: '#' },
        ],
    }
}

export default function storeReducer(state = initialState, action){
    switch(action.type){
        case SET_USER:
          return {
            ...state,
            userData : action.payload
          }
        case UNSET_USER:
        return {
          ...state, 
          userData : undefined
        }
        default:
            return state;
    }
}