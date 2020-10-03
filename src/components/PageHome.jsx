import React from 'react'
import BaseLayout from './BaseLayout'
import FormThread from './FormThread'
import CardThread from './CardThread'
import { firestore } from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Progress from './Progress'

const PageHome = () => {
  // データを更新順でソートする
  const query = firestore().collection('threads').orderBy('updatedAt', 'desc')

  // 全てのスレッドを変数threadsに入れる
  const [threads = [], loading] = useCollectionData(query, { idField: 'id' })

  return (
    <div>
      <BaseLayout>
        <h1>{'Home'}</h1>
        <FormThread />
        {threads.map((thread) => (
          <CardThread key={thread.id} thread={thread} />
        ))}
        {loading && <Progress />}
      </BaseLayout>
    </div>
  )
}

export default PageHome
