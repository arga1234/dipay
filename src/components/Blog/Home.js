import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import { useSelector, shallowEqual } from "react-redux";
import Footer from './Footer';

export default function Home() {  
  const { sections, featuredPosts, mainFeaturedPost, userData } = useSelector(state => ({
    userData: state.userData,
    sections: state.sections,
    featuredPosts: state.featuredPosts,
    mainFeaturedPost: state.mainFeaturedPost,
  }), shallowEqual);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} userData={userData} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer description="This is footer" />
    </React.Fragment>
  );
}