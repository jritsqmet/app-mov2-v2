import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ListaScreen() {
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [tareas, settareas] = useState([])

    useEffect(() => {
        console.log(tareas)
        // Alert.alert('Mensaje', 'La lista de tareas se ha actualizado')

    }, [tareas])


    function guardar() {
        //VALIDANDO CAMPOS
        if( titulo.trim() === '' || descripcion.trim() === '' ){
            Alert.alert('Error', 'No se permiten campos en blanco')
        }else{
            const nuevasTareas: any = [...tareas, { titulo, descripcion }]
            settareas(nuevasTareas)
        }

        //LIMPIAR LOS CAMPOS
        setTitulo('')
        setDescripcion('')
    }

    function eliminar( tarea: any ){
        const nuevasTareas: any = tareas.filter( (lista) => lista != tarea )
        settareas(nuevasTareas)
    }


    //FLATLIST - CORRECCION DE TIPO DE DATO
    type tarea ={
        titulo: string,
        descripcion: string
    }

    return (
        <View>
            <Text>ListaScreen</Text>

            <TextInput
                placeholder='Ingrese titulo'
                onChangeText={(texto) => (setTitulo(texto))}
                value={titulo}
            />
            <TextInput
                placeholder='Ingrese descripcion'
                onChangeText={(texto) => setDescripcion(texto)}
                value= {descripcion}
            />

            <Button title='Guardar' onPress={() => guardar()} />

            <View style={{ borderWidth: 1, marginTop: 10, width: 300 }} />

            <View style={styles.flatL}>
                <FlatList
                    data={tareas}
                    renderItem={( { item } : {item: tarea} ) => (
                        <View style={styles.lista}>
                            <Text>Titulo: {item.titulo}</Text>
                            <Text>Descripcion: {item.descripcion}</Text>
                            <Button title='eliminar' color={'red'} onPress={() => eliminar(item)}/>
                        </View>
                    )}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    flatL: {
        height: '70%'
    },
    lista:{
        backgroundColor:'rgb(64,191,124)',
        marginTop:10,
        
    }
})