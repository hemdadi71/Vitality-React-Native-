import Item from './Item'

const Items = () => {
  return (
    <div className="w-full h-full overflow-auto flex flex-row-reverse flex-wrap gap-y-5 gap-x-10 pb-5 pr-5">
      <Item title='Movies' poster='/images/movie-poster.jpg' videoLink="https://res.cloudinary.com/durpzunxl/video/upload/v1706124295/y3wzv4zglcos2g4v7msi.mp4" apkLink="/apk/Movie-app.apk" gitHubLink='https://github.com/hemdadi71/movie-app-React-Native-' />
      <Item title='Vitality' poster='/images/vitality-poster.jpg' videoLink="https://res.cloudinary.com/durpzunxl/video/upload/v1707589101/fahptbxtbxkbhjbjbrqb.mp4" apkLink="/apk/Vitality.apk" gitHubLink='https://github.com/hemdadi71/movie-app-React-Native-' />
    </div>
  )
}

export default Items
