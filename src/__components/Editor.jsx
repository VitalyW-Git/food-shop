import {useState} from "react";
import {useDispatch} from 'react-redux'
import {addNewProduct} from "../store/basket.js";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';

export default function Editor({title, price, id}) {
    const [titleValue, setTitle] = useState(title)
    const [priceValue, setPrice] = useState(price)
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const saveProduct = () => {
        setModal(!modal)
        dispatch(addNewProduct({id, titleValue, priceValue}));
    }

    const button = (
        <ModalFooter>
            <Button color="primary" onClick={saveProduct}>
                Сохранить
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Закрыть
            </Button>
        </ModalFooter>
    );

    return (
        <>
            <div>
                <Button color="primary" onClick={toggle}>
                    Редактировать
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader>
                        Редактирование продукта
                    </ModalHeader>
                    <ModalBody>
                            <Label for="exampleTitle">
                                Название
                            </Label>
                            <Input
                                id="exampleTitle"
                                name="title"
                                type="text"
                                onChange={e => setTitle(e.target.value)}
                                value={titleValue}
                            />
                            <Label for="examplePrice">
                                Цена
                            </Label>
                            <Input
                                id="examplePrice"
                                name="price"
                                type="text"
                                onChange={e => setPrice(e.target.value)}
                                value={priceValue}
                            />
                    </ModalBody>
                    {button}
                </Modal>
            </div>
        </>
    )
}