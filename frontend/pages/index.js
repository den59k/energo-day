import Layout from 'components/layout'
import HeadBlock from 'blocks/head'
import VideoBlock1 from 'blocks/video-1'
import VideoBlock2 from 'blocks/video-2'
import VoteBlock from 'blocks/vote'
import VideoBlock3 from 'blocks/video-3'
import VideoBlock4 from 'blocks/video-4'
import VideoGreetings from 'blocks/video-greetings'
import Chat from 'blocks/chat'
import PhotoGallery from 'blocks/photo-gallery'
import GamesBlock from 'blocks/games'
import LastBlock from 'blocks/last'

export default function Home() {
  return (
    <Layout >
     <HeadBlock/>
     <VideoBlock1/>
     <VideoBlock2/>
     <VoteBlock/> 
     <VideoBlock3/>
     <VideoBlock4/>
     <VideoGreetings/>
     <Chat/>
     <PhotoGallery/>
     <GamesBlock/>
     <LastBlock/>
    </Layout>
  )
}
