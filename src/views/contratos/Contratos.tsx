import { Card, Divider, List, ListItem } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Accordian from "../../components/shared/Accordian/Accordian";
import { TitleMenu } from "../../components/shared/Header/TitleMenu";
import { useSession } from "../../context/sessionContext";
import { contratosServices } from "../../services/contratos/ContratosServices";
import { ContratosStyleSheet } from "./ContratosStyleSheet";

import { Table, Row, Rows, TableWrapper, Cell } from 'react-native-table-component';


export class ContratosData {
    nome?: string
    cnpj?: string
    codclient?: Number
    numero?: Number
    mesatual?: Number
    mesfinal?: Number
    vencimento?: Number
    custo?: Number
    custo_total?: Number
    franquias?: [
        {
            medidor?: string
            franquia?: string
            custo_excedente?: Number
        }
    ]
    equipamentos?: [
        {
            serie?: string
            modelo?: string
            marca?: string
            estado?: string
            endinst?: string
            cidade?: string
        }
    ]
}

export default function Contratos() {
    const { userData, sessionData } = useSession()
    const [dadosContrato, setDadosContrato] = useState<any[]>([])
    const [contratoSelecionado, setContratoSelecionado] = useState<ContratosData>()
    const [modalVisible, setModalVisible] = useState(false)


    useEffect(() => {
        getContratos()
    }, [])

    async function getContratos() {
        const data = await contratosServices.getContratosData(userData?.id, sessionData?.token)
        setDadosContrato(data.contratosData)
    }

    const drawColorStatus = (vencimento: any) => {

        switch (true) {
            case vencimento > 3: {
                return 'primary'
            }
            case vencimento == 3: {
                return 'info'
            }
            case vencimento == 1: {
                return 'warning'
            }
            case vencimento == 0: {
                return 'danger'
            }
        }
    }

    function openContrato(contrato: any) {
        setContratoSelecionado(contrato)
        setModalVisible(!modalVisible)
    }

    const drawContratoCard = () => {
        return dadosContrato.map((contrato: ContratosData) => {
            return (
                <Card
                    key={contrato.numero?.toString()}
                    style={ContratosStyleSheet.cardContrato}
                    status={drawColorStatus(contrato.vencimento)}
                    onPress={() => openContrato(contrato)}
                >
                    <View style={ContratosStyleSheet.viewCard}>
                        <View>
                            <Text numberOfLines={1} style={ContratosStyleSheet.labelTitleContrato}>
                                {contrato.nome}
                            </Text>
                            <Text numberOfLines={1} style={ContratosStyleSheet.labelSubtitleContrato}>
                                Cod. Cliente: {contrato.codclient?.toString()}
                            </Text>
                        </View>
                    </View>
                </Card>
            )
        })
    }

    const drawTableEquipamentos: JSX.Element = (
        <React.Fragment >
            <ScrollView horizontal={true}>
                <View >
                    <Table>
                        <TableWrapper style={ContratosStyleSheet.tableHead}>
                            <Cell data={"Modelo"} style={ContratosStyleSheet.tableCell} />
                            <Cell data={"N/S"} style={ContratosStyleSheet.tableCell} />
                            <Cell data={"End. Inst"} style={ContratosStyleSheet.tableCell} />
                        </TableWrapper>
                    </Table>
                    <ScrollView>
                        <Table>
                            {
                                contratoSelecionado?.equipamentos?.map((equipamento) => {
                                    return (
                                        <TableWrapper key={equipamento.serie} style={{ flexDirection: 'row' }}>
                                            <Cell data={equipamento.modelo} style={ContratosStyleSheet.tableCell} />
                                            <Cell data={equipamento.serie} style={ContratosStyleSheet.tableCell} />
                                            <Cell data={equipamento.endinst} style={ContratosStyleSheet.tableCell} />
                                        </TableWrapper>
                                    )
                                })
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </React.Fragment>
    )

    const drawTableFranquia: JSX.Element = (
        <React.Fragment >
            <ScrollView horizontal={true}>
                <View >
                    <Table>
                        <TableWrapper style={ContratosStyleSheet.tableHead}>
                            <Cell data={"Medidor"} style={ContratosStyleSheet.tableCell} />
                            <Cell data={"Franquia"} style={ContratosStyleSheet.tableCell} />
                            <Cell data={"Custo Exc."} style={ContratosStyleSheet.tableCell} />
                        </TableWrapper>
                    </Table>
                    <ScrollView>
                        <Table>
                            {
                                contratoSelecionado?.franquias?.map((franquia, index) => {
                                    return (
                                        <TableWrapper key={index} style={{ flexDirection: 'row' }}>
                                            <Cell data={franquia.medidor} style={ContratosStyleSheet.tableCell} />
                                            <Cell data={franquia.franquia} style={ContratosStyleSheet.tableCell} />
                                            <Cell data={franquia.custo_excedente} style={ContratosStyleSheet.tableCell} />
                                        </TableWrapper>
                                    )
                                })
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </React.Fragment>
    )

    const drawModal = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }}>
                <View style={ContratosStyleSheet.centeredViewModal}>
                    <View style={ContratosStyleSheet.modalView}>
                        <View style={ContratosStyleSheet.viewHeaderModal}>
                            <Text numberOfLines={1} style={ContratosStyleSheet.labelTitleModal}>
                                {contratoSelecionado?.nome}
                            </Text>
                            <Text numberOfLines={1} style={ContratosStyleSheet.labelSubtitleContrato}>
                                Cod. Cliente: {contratoSelecionado?.codclient?.toString()}
                            </Text>
                            <Text numberOfLines={1} style={ContratosStyleSheet.labelSubtitleContrato}>
                                Nº{contratoSelecionado?.numero?.toString()} -
                                Vigência: {contratoSelecionado?.mesatual?.toString()}/{contratoSelecionado?.mesfinal?.toString()}
                            </Text>
                            <Divider style={ContratosStyleSheet.modalDivider} />
                        </View>
                        <View style={ContratosStyleSheet.viewModal}>
                            <Accordian
                                title='Equipamentos'
                                component={drawTableEquipamentos} />
                            <Accordian
                                title={`Custo Fixo Mensal - R$${contratoSelecionado?.custo}`}
                                component={drawTableFranquia} />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View style={ContratosStyleSheet.container}>
            <TitleMenu title="Contratos" />
            <View style={ContratosStyleSheet.contents}>
                <ScrollView>
                    {drawContratoCard()}
                </ScrollView>
            </View>
            {drawModal()}
        </View>
    )
}