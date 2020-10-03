import { useState } from "react";
import { firestore } from "firebase/app";

export const useCreateResponse = () => {
  const [loading, setLoading] = useState(false);

  const createResponse = async ({ text, threadId, username }) => {
    if (loading) return;

    setLoading(true);

    const now = firestore.Timestamp.now();

    // firebaseのthreadドキュメントを読み込む
    const threadRef = firestore().collection("threads").doc(threadId);

    // 現在のスレッドのresponseCountの値に1を追加
    await threadRef.update({
      responseCount: firestore.FieldValue.increment(1),
      updatedAt: now,
    });

    // responseコレクションへの参照を追加
    const responseRef = threadRef.collection("responses").doc();

    await responseRef.set({
      createdAt: now,
      updatedAt: now,
      text,
      threadId,
      username,
    });

    setLoading(false);
  };

  return [createResponse, loading];
};
