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

import useSWR from 'swr'
import { GET } from 'libs/fetch'

export default function Home() {

  const { data } = useSWR('/api', GET, { refreshInterval: 5000 })
  const _data = data || { photos: [], videos: [], messages: [], indexes: [] }

  console.log(_data)

  return (
    <Layout >
     <HeadBlock/>
     <VideoBlock1/>
     <VideoBlock2/>
     <VoteBlock indexes={_data.indexes} likes={_data.likes}/> 
     <VideoBlock3/>
     <VideoBlock4/>
     <VideoGreetings videos={_data.videos}/>
     <Chat messages={_data.messages}/>
     <PhotoGallery photos={_data.photos}/>
     <GamesBlock/>
     <LastBlock/>
    </Layout>
  )
}
