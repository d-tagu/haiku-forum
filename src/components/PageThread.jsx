import React from "react";
import BaseLayout from "./BaseLayout";
import { firestore } from 'firebase/app'
// URLのパスの中で動的に変化する部分の値を取得
import { useParams } from 'react-router-dom'
import FormResponse from './FormResponse'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import CardResponse from './CardResponse'
import Progress from './Progress'

const PageThread = () => {
  const { threadId } = useParams()

  const query = firestore()
    .collection('threads')
    .doc(threadId)
    .collection('responses')
    .orderBy('createdAt', 'asc')

  const [responses = [], loading] = useCollectionData(query, { idField: 'id' })

  return (
    <BaseLayout>
      <h1>{"Thread"}</h1>
      {responses.map((response, index) => (
        <CardResponse key={response.id} index={index} response={response} />
      ))}
      {loading && <Progress />}
      <FormResponse threadId={threadId} />
    </BaseLayout>
  );
};

export default PageThread;
