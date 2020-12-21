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
import { getTime } from 'libs/rus'

export default function Home() {

  const { data } = useSWR('/api', GET, { refreshInterval: 5000 })
  const _data = data || { photos: [], videos: [], messages: [], indexes: [], _timing: {}, timing: {} }

  const _time = (key) => {
    
    return { active: _data._timing[key], time: _data.timing[key] && getTime(_data.timing[key]) }
  }

  return (
    <Layout >
     <HeadBlock timing={_time('stream')}/>
     <VideoBlock1 timing={_time('videos')}/>
     <VideoBlock2 timing={_time('videos')}/>
     <VoteBlock indexes={_data.indexes} likes={_data.likes} startVote={_time('startVote')} finishVote={_time('finishVote')}/> 
     <VideoBlock3 timing={_time('raffle')}/>
     <VideoBlock4 timing1={_time('winner')} timing2={_time('awards')}/>
     <VideoGreetings videos={_data.videos}/>
     <Chat messages={_data.messages}/>
     <PhotoGallery photos={_data.photos}/>
     <GamesBlock/>
     <LastBlock/>
    </Layout>
  )
}
