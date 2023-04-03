import { doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConf";
import { establishmentConverter } from "../DTO/EstablishmentDTO";

class EstablishmentDAO {

    async getEstablishmentById(establishmentId) {
        const e = await getDoc(doc(db, "Establishments", establishmentId).withConverter(establishmentConverter));
        return e.data();
    }

}

export { EstablishmentDAO };