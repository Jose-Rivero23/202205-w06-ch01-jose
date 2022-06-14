import { SyntheticEvent, useState } from 'react';
import { iCharacter } from '../models/character';

export function FormPage() {
    const categorias = ['king', 'knight', 'squire', 'counselor'];
    const initialState: iCharacter = {
        name: '',
        family: '',
        age: 0,
        category: '',
        id: 0,
        message: '',
        kingdomYears: 0,
        weapon: '',
        skill: 0,
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };
    console.log(formData);
    return (
        <>
            <h2>Nuevos Personajes</h2>
            <form>
                <select
                    name="category"
                    id=""
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option></option>
                    {categorias.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ingresa Nombre"
                />
                <input
                    type="text"
                    name="family"
                    value={formData.family}
                    onChange={handleChange}
                    placeholder="Ingresa familia"
                />
                <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    title="Ingresa Edad"
                />
                {formData.category === 'king' ? (
                    <input
                        type="text"
                        name="kingdomYears"
                        value={formData.kingdomYears}
                        onChange={handleChange}
                        placeholder="Ingrese Años de Reinado"
                    />
                ) : (
                    ''
                )}
                {formData.category === 'knight' ? (
                    <input
                        type="text"
                        name="weapon"
                        value={formData.weapon}
                        onChange={handleChange}
                        placeholder="Ingrese Arma"
                    />
                ) : (
                    ''
                )}
                {formData.category === 'knight' ? (
                    <input
                        type="text"
                        name="skill"
                        value={formData.skill}
                        onChange={handleChange}
                        title="Ingrese nivel Habilidad"
                    />
                ) : (
                    ''
                )}
            </form>
        </>
    );
}
