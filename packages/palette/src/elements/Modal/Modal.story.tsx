import { storiesOf } from "@storybook/react"
import React from "react"
import { Box } from "../Box"
import { Button } from "../Button"
import { Checkbox } from "../Checkbox"
import { Sans } from "../Typography"
import { Modal } from "./Modal"

class ExampleFormModal extends React.Component {
  state = { showModal: false, selected: false }

  showModal = () => {
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
        <Button onClick={this.showModal}>Show Modal</Button>
        <Modal show={this.state.showModal} onClose={this.hideModal}>
          <Box>
            <Checkbox
              onSelect={selected => this.setState({ selected })}
              selected={this.state.selected}
            >
              <Sans size="4">Agree</Sans>
            </Checkbox>
          </Box>
        </Modal>
      </>
    )
  }
}

const HooksFormExample = () => {
  const [show, setShow] = React.useState(false)
  const [selected, setSelected] = React.useState(false)
  return (
    <>
      <Button onClick={() => setShow(true)}>Show Modal</Button>
      <Modal show={show} onClose={() => setShow(false)}>
        <Box>
          <Checkbox onSelect={v => setSelected(v)} selected={selected}>
            <Sans size="4">Agree</Sans>
          </Checkbox>
        </Box>
      </Modal>
    </>
  )
}

storiesOf("Components/Modal", module)
  .add("With a checkbox", () => <ExampleFormModal />)
  .add("FC Form modal", () => <HooksFormExample />)
