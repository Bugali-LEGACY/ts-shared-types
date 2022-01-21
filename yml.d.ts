interface SimpleActionable {
  id: string
  path: string
  type: string
  volume?: number
  loop?: boolean
  channel?: string
}

interface MultiActionable{
  id:string
  paths:string[]
  channel: string
  type: string
}

interface PlayAction {
  action: 'play'
  id: string
}

interface LuaQuery {
  lua: string
}

interface SetIdxAction {
  action: 'setIdx'
  id: string
  index: number
}

type SimpleTouchHandler = [PlayAction]
type MultiTouchHandler = [LuaQuery, SetIdxAction, PlayAction]
type ComplexTouchHandler = any[]

type TouchHandler = SimpleTouchHandler | MultiTouchHandler | ComplexTouchHandler

interface BaseCollision {
  meta: string
  origin: [number, number]
  onTouch?: TouchHandler
  onLongTouch?: TouchHandler
  onSwipe?: TouchHandler
}

interface RectangleCollision extends BaseCollision {
  shape: 'rectangle'
  end: [number, number]
}

interface CircleCollision extends BaseCollision {
  shape: 'circle'
  radius: number
}

type YMLCollision = CircleCollision | RectangleCollision

interface PageFile {
  version: string
  type: 'sequence'
  collisionsList: YMLCollision[]
  actionablesList: (SimpleActionable|MultiActionable)[]
}

interface BookFile {
  version: string
  type: 'book'
  pages: string[]
}
