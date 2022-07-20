import React from 'react'

const UploadProduct = () => {
  return (
    <div>
        <div id='uploadBox'>
            <h2>Upload_Product</h2>
            <ul>
                <li>
                    <label htmlFor="name">상품명</label>
                    <input type="text" name='name' />
                </li>
                <li>
                    <label htmlFor="price">가격</label>
                    <input type="number" name='price' min={0} />
                </li>
                <li>
                    <label htmlFor="size1">사이즈S</label>
                    <input type="number" name='size1' min={0} />
                </li>
                <li>
                    <label htmlFor="size2">사이즈M</label>
                    <input type="number" name='size2' min={0} />
                </li>
                <li>
                    <label htmlFor="size3">사이즈L</label>
                    <input type="number" name='size3' min={0} />
                </li>
                <li>
                    <label htmlFor="name">type</label>
                    <select name='name'>
                        <option>Mermaid</option>
                        <option>Bell_Line</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="desc1">상품정보1</label>
                    <textarea cols={50} rows={10} name="desc1"></textarea>
                </li>
                <li>
                    <label htmlFor="desc2">상품정보1</label>
                    <textarea cols={50} rows={10} name="desc2"></textarea>
                </li>
                <li>
                    <label htmlFor="pic1">사진1</label>
                    <input type="file" name="pic1" />
                </li>
                <li>
                    <label htmlFor="pic2">사진2</label>
                    <input type="file" name="pic2" />
                </li>
                <li>
                    <label htmlFor="pic3">사진3</label>
                    <input type="file" name="pic3" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default UploadProduct