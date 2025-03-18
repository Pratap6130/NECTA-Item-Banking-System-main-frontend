import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Difficulty Level</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: [1, 2, 3, 4, 5],
                datasets: [
                  {
                    label: 'Difficulty Level',
                    backgroundColor: '#f87979',
                    data: [2, 1],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Exam Type</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Secondary', 'Primary', 'Tertairy'],
                datasets: [
                  {
                    data: [33.3, 66.6, 0],
                    backgroundColor: ['#e31717', '#24169e', '#FFCE56'],
                    hoverBackgroundColor: ['#e31717', '#24169e', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Doughnut Chart</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Skill </CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Knowledge',
                  'Comprehension',
                  'Application',
                  'Analysis',
                  'Synthesis',
                  'Evaluation'],
                datasets: [
                  {
                    data: [33.3, 33.3, 33.3, 0, 0, 0],
                    backgroundColor: ['#3d34eb', '#eb3434', '#eb8c34', '#0c421a', '#2d0c42', '#11398a'],
                    hoverBackgroundColor: ['#3d34eb', '#eb3434', '#eb8c34', '#0c421a', '#2d0c42', '#11398a'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Item Type</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Subjective', 'Objective'],
                datasets: [
                  {
                    data: [66.7, 33.3],
                    backgroundColor: ['#e31717', '#24169e'],
                    hoverBackgroundColor: ['#e31717', '#24169e'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Answer upload type</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['MCQ', 'Upload File', 'Paragraph', 'One Word'],
                datasets: [
                  {
                    data: [33.3, 0, 33.3, 33.3],
                    backgroundColor: ['#1b118a', '#e31717', '#175c09', '#d69615'],
                    hoverBackgroundColor: ['#1b118a', '#e31717', '#175c09', '#d69615'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Charts
