import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import serviceAccount from "../../firebase-service.json" with {
  type: "json"
};

const firebaseApp = initializeApp({
  credential: cert(serviceAccount)
});

export const firebaseAuth = getAuth(firebaseApp);