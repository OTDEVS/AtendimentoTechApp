import { Card, Layout, Text, ViewPager } from "@ui-kitten/components";
import React, { useState } from "react";
import { ScrollView, View, Alert } from "react-native";
import * as Progress from 'react-native-progress';
import { default as theme } from '../../customize/theme.json'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { TitleMenu } from "../../components/shared/Header/TitleMenu";
import { HomeStyleSheet } from "./HomeStyleSheet";

export default function Home() {
    const [selectedIndexFaturas, setSelectedIndexFaturas] = useState(0);
    const [selectedIndexChamados, setSelectedIndexChamados] = useState(0);
    const [selectedIndexContratos, setSelectedIndexContratos] = useState(0);

    const faturas = {
        total: 126,
        aVencer: 30,
        vencidas: 36
    }

    const chamados = {
        abertos: 15,
        pendentes: 10,
        fechados: 20,
        total: 45
    }

    const contratos = {
        aVencer: 13,
        vencidos: 15,
        total: 28
    }

    function calculoPercentual(total: any, valor: any) {
        return (valor * 100) / (total * 100)
    }

    function pressCard() {
        Alert.alert("teste")
    }

    return (
        <View style={HomeStyleSheet.container}>
            <TitleMenu />
            <ScrollView style={HomeStyleSheet.contents}>
                <Text style={HomeStyleSheet.labelSection}>FINANCEIRO</Text>
                <ViewPager
                    selectedIndex={selectedIndexFaturas}
                    onSelect={index => setSelectedIndexFaturas(index)}
                    style={HomeStyleSheet.viewPager}>

                    <Layout
                        style={HomeStyleSheet.tab}
                        level='2'>
                        <Card style={[HomeStyleSheet.card, {backgroundColor: theme['color-primary-600']}]} onPress={pressCard}>
                            <Text style={HomeStyleSheet.labelTitleCard}>
                                Faturas a Vencer
                            </Text>
                            <View style={HomeStyleSheet.viewValueBar}>
                                <Text style={HomeStyleSheet.labelValueCard}>
                                    {faturas.aVencer}
                                </Text>
                                <View style={HomeStyleSheet.viewPorcentValueCard}>
                                    <Ionicons name="stats-chart-outline" style={{ color: 'white' }} />
                                    <Text style={HomeStyleSheet.labelPorcentage}>
                                        {(calculoPercentual(faturas.total, faturas.aVencer) * 100).toFixed(2)}%
                                    </Text>
                                </View>
                            </View>
                            <Progress.Bar
                                progress={calculoPercentual(faturas.total, faturas.aVencer)}
                                width={null}
                                color={'white'}
                                borderWidth={0}
                                unfilledColor={theme['color-primary-400']}
                            />
                            <Text style={HomeStyleSheet.labelTotalFaturas}>Total de Faturas: {faturas.total}</Text>
                        </Card>
                    </Layout>

                    <Layout
                        style={HomeStyleSheet.tab}
                        level='2'>
                        <Card style={[HomeStyleSheet.card, {backgroundColor: theme['color-danger-700']}]} onPress={pressCard}>
                            <Text style={HomeStyleSheet.labelTitleCard}>
                                Faturas Vencidas
                            </Text>
                            <View style={HomeStyleSheet.viewValueBar}>
                                <Text style={HomeStyleSheet.labelValueCard}>
                                    {faturas.vencidas}
                                </Text>
                                <View style={HomeStyleSheet.viewPorcentValueCard}>
                                    <Ionicons name="stats-chart-outline" style={{ color: 'white' }} />
                                    <Text style={HomeStyleSheet.labelPorcentage}>
                                        {(calculoPercentual(faturas.total, faturas.vencidas) * 100).toFixed(2)}%
                                    </Text>
                                </View>
                            </View>
                            <Progress.Bar
                                progress={calculoPercentual(faturas.total, faturas.vencidas)}
                                width={null}
                                color={'white'}
                                borderWidth={0}
                                unfilledColor={theme['color-danger-400']}
                            />
                            <Text style={HomeStyleSheet.labelTotalFaturas}>Total de Faturas: {faturas.total}</Text>
                        </Card>
                    </Layout>

                </ViewPager>

                <Text style={HomeStyleSheet.labelSection}>CHAMADOS</Text>
                <ViewPager
                    selectedIndex={selectedIndexChamados}
                    onSelect={index => setSelectedIndexChamados(index)}
                    style={HomeStyleSheet.viewPager}>

                    <Layout
                        style={HomeStyleSheet.tab}
                        level='2'>
                        <Card style={[HomeStyleSheet.card, {backgroundColor: theme['color-primary-600']}]} onPress={pressCard}>
                            <Text style={HomeStyleSheet.labelTitleCard}>
                                Chamados Abertos
                            </Text>
                            <View style={HomeStyleSheet.viewValueBar}>
                                <Text style={HomeStyleSheet.labelValueCard}>
                                    {chamados.abertos}
                                </Text>
                                <View style={HomeStyleSheet.viewPorcentValueCard}>
                                    <Ionicons name="stats-chart-outline" style={{ color: 'white' }} />
                                    <Text style={HomeStyleSheet.labelPorcentage}>
                                        {(calculoPercentual(chamados.total, chamados.abertos) * 100).toFixed(2)}%
                                    </Text>
                                </View>
                            </View>
                            <Progress.Bar
                                progress={calculoPercentual(chamados.total, chamados.abertos)}
                                width={null}
                                color={'white'}
                                borderWidth={0}
                                unfilledColor={theme['color-primary-400']}
                            />
                            <Text style={HomeStyleSheet.labelTotalFaturas}>Total de chamados: {chamados.total}</Text>
                        </Card>
                    </Layout>

                    <Layout
                        style={HomeStyleSheet.tab}
                        level='2'>
                        <Card style={[HomeStyleSheet.card, {backgroundColor: theme['color-primary-600']}]} onPress={pressCard}>
                            <Text style={HomeStyleSheet.labelTitleCard}>
                                Chamados Pendentes
                            </Text>
                            <View style={HomeStyleSheet.viewValueBar}>
                                <Text style={HomeStyleSheet.labelValueCard}>
                                    {chamados.pendentes}
                                </Text>
                                <View style={HomeStyleSheet.viewPorcentValueCard}>
                                    <Ionicons name="stats-chart-outline" style={{ color: 'white' }} />
                                    <Text style={HomeStyleSheet.labelPorcentage}>
                                        {(calculoPercentual(chamados.total, chamados.pendentes) * 100).toFixed(2)}%
                                    </Text>
                                </View>
                            </View>
                            <Progress.Bar
                                progress={calculoPercentual(chamados.total, chamados.pendentes)}
                                width={null}
                                color={'white'}
                                borderWidth={0}
                                unfilledColor={theme['color-primary-400']}
                            />
                            <Text style={HomeStyleSheet.labelTotalFaturas}>Total de chamados: {chamados.total}</Text>
                        </Card>
                    </Layout>

                    <Layout
                        style={HomeStyleSheet.tab}
                        level='2'>
                        <Card style={[HomeStyleSheet.card, {backgroundColor: theme['color-success-600']}]} onPress={pressCard}>
                            <Text style={HomeStyleSheet.labelTitleCard}>
                                Chamados Fechados
                            </Text>
                            <View style={HomeStyleSheet.viewValueBar}>
                                <Text style={HomeStyleSheet.labelValueCard}>
                                    {chamados.fechados}
                                </Text>
                                <View style={HomeStyleSheet.viewPorcentValueCard}>
                                    <Ionicons name="stats-chart-outline" style={{ color: 'white' }} />
                                    <Text style={HomeStyleSheet.labelPorcentage}>
                                        {(calculoPercentual(chamados.total, chamados.fechados) * 100).toFixed(2)}%
                                    </Text>
                                </View>
                            </View>
                            <Progress.Bar
                                progress={calculoPercentual(chamados.total, chamados.fechados)}
                                width={null}
                                color={'white'}
                                borderWidth={0}
                                unfilledColor={theme['color-success-400']}
                            />
                            <Text style={HomeStyleSheet.labelTotalFaturas}>Total de chamados: {chamados.total}</Text>
                        </Card>
                    </Layout>

                </ViewPager>

                <Text style={HomeStyleSheet.labelSection}>CONTRATOS</Text>
                <ViewPager
                    selectedIndex={selectedIndexContratos}
                    onSelect={index => setSelectedIndexContratos(index)}
                    style={HomeStyleSheet.viewPager}>

                    <Layout
                        style={HomeStyleSheet.tab}
                        level='2'>
                        <Card style={[HomeStyleSheet.card, {backgroundColor: theme['color-primary-600']}]} onPress={pressCard}>
                            <Text style={HomeStyleSheet.labelTitleCard}>
                                Contratos a Vencer
                            </Text>
                            <View style={HomeStyleSheet.viewValueBar}>
                                <Text style={HomeStyleSheet.labelValueCard}>
                                    {contratos.aVencer}
                                </Text>
                                <View style={HomeStyleSheet.viewPorcentValueCard}>
                                    <Ionicons name="stats-chart-outline" style={{ color: 'white' }} />
                                    <Text style={HomeStyleSheet.labelPorcentage}>
                                        {(calculoPercentual(contratos.total, contratos.aVencer) * 100).toFixed(2)}%
                                    </Text>
                                </View>
                            </View>
                            <Progress.Bar
                                progress={calculoPercentual(contratos.total, contratos.aVencer)}
                                width={null}
                                color={'white'}
                                borderWidth={0}
                                unfilledColor={theme['color-primary-400']}
                            />
                            <Text style={HomeStyleSheet.labelTotalFaturas}>Total de Faturas: {contratos.total}</Text>
                        </Card>
                    </Layout>

                    <Layout
                        style={HomeStyleSheet.tab}
                        level='2'>
                        <Card style={[HomeStyleSheet.card, {backgroundColor: theme['color-danger-700']}]} onPress={pressCard}>
                            <Text style={HomeStyleSheet.labelTitleCard}>
                                Contratos Vencidos
                            </Text>
                            <View style={HomeStyleSheet.viewValueBar}>
                                <Text style={HomeStyleSheet.labelValueCard}>
                                    {contratos.vencidos}
                                </Text>
                                <View style={HomeStyleSheet.viewPorcentValueCard}>
                                    <Ionicons name="stats-chart-outline" style={{ color: 'white' }} />
                                    <Text style={HomeStyleSheet.labelPorcentage}>
                                        {(calculoPercentual(contratos.total, contratos.vencidos) * 100).toFixed(2)}%
                                    </Text>
                                </View>
                            </View>
                            <Progress.Bar
                                progress={calculoPercentual(contratos.total, contratos.vencidos)}
                                width={null}
                                color={'white'}
                                borderWidth={0}
                                unfilledColor={theme['color-danger-400']}
                            />
                            <Text style={HomeStyleSheet.labelTotalFaturas}>Total de Faturas: {contratos.total}</Text>
                        </Card>
                    </Layout>

                </ViewPager>
            </ScrollView>
        </View>
    )
}