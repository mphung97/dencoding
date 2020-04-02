import * as React from "react"

type Props = {
  onChange?: (value: string) => void
  value?: string
  autoFocus?: boolean
  disabled?: boolean
  placeholder?: string
}

const TextArea: React.FunctionComponent<Props> = ({
  onChange,
  value,
  disabled,
  placeholder
}) => {
  const inputEl = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus()
    }
  }, [])

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = event.target
    onChange && onChange(value)
  }

  const handleClear = (): void => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus()
    }
    onChange && onChange("")
  }

  const handleCopy = (): void => {
    if (inputEl && inputEl.current) {
      inputEl.current.select()
      document.execCommand("copy")
    }
  }

  return (
    <>
      <div className="textarea--wrapper">
        <textarea
          ref={inputEl}
          className="textarea"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          readOnly={disabled}
          rows={5}
        />
        {disabled && (
          <button
            className="button--clear"
            onClick={handleCopy}
            title="copy"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.48706 17.6077H6.48706C5.95663 17.6077 5.44792 17.397 5.07285 17.0219C4.69777 16.6469 4.48706 16.1382 4.48706 15.6077V6.60773C4.48706 6.07729 4.69777 5.56859 5.07285 5.19351C5.44792 4.81844 5.95663 4.60773 6.48706 4.60773H15.4871C16.0175 4.60773 16.5262 4.81844 16.9013 5.19351C17.2763 5.56859 17.4871 6.07729 17.4871 6.60773V7.60773M13.4871 11.6077H22.4871C23.5916 11.6077 24.4871 12.5032 24.4871 13.6077V22.6077C24.4871 23.7123 23.5916 24.6077 22.4871 24.6077H13.4871C12.3825 24.6077 11.4871 23.7123 11.4871 22.6077V13.6077C11.4871 12.5032 12.3825 11.6077 13.4871 11.6077Z"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        <button
          className="textarea--icon button--clear"
          onClick={handleClear}
          title="cancel"
        >
          <svg
            className="icon--clear"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0007 0.833374C4.91732 0.833374 0.833984 4.91671 0.833984 10C0.833984 15.0834 4.91732 19.1667 10.0007 19.1667C15.084 19.1667 19.1673 15.0834 19.1673 10C19.1673 4.91671 15.084 0.833374 10.0007 0.833374ZM15.0006 13.3334L13.334 15L10.0007 11.6667L6.66732 15L5.00065 13.3334L8.33398 10L5.00065 6.66671L6.66732 5.00004L10.0007 8.33337L13.334 5.00004L15.0006 6.66671L11.6673 10L15.0006 13.3334Z"
              fill="black"
            />
          </svg>
        </button>
        <svg
          className="textarea--icon icon--resize"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1669 15.4333V19.1667H15.4336L19.1669 15.4333Z"
            fill="#757575"
          />
          <path
            d="M19.1663 9.59998V12.9L12.8996 19.1666H9.59961L19.1663 9.59998Z"
            fill="#757575"
          />
          <path
            d="M19.1656 3.76672V7.06673L7.06562 19.1667H3.76562L19.1656 3.76672Z"
            fill="#757575"
          />
        </svg>
      </div>
      <style jsx>{`
        // TEXTAREA
        .textarea--wrapper {
          position: relative;
          margin-bottom: 0.5rem;
        }
        .textarea {
          width: 100%;
          resize: none;
          outline: none;
          border: 2px solid transparent;
          background-color: #fff;
          color: #757575;
          padding: 1rem 3rem 1rem 1rem;
          border-radius: 5px;
          box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.06),
            0px 4px 8px rgba(50, 50, 71, 0.06);
        }
        .textarea:read-only {
          background-color: #f6f6f6;
          color: #afafaf;
        }
        .textarea:focus {
          background-color: #ffffff;
          color: #000000;
          border: 2px solid #000000;
        }
        .textarea:focus ~ .icon--resize > path,
        .textarea:focus ~ .button--clear > .icon--clear > path {
          fill: #000000;
        }
        .textarea:focus ~ .button--clear:hover > .icon--clear > path {
          fill: #757575;
        }

        .textarea:read-only ~ .textarea--icon {
          display: none;
        }

        // ICON RESIZE
        .icon--resize {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
        }

        // ICON CLEAR
        .icon--clear > path {
          fill: #757575;
        }
        // BUTTON CLEAR
        .button--clear {
          position: absolute;
          background-color: transparent;
          padding: 0.5rem;
          margin: 0;
          border: 0;
          top: 0.5rem;
          right: 0.5rem;
          line-height: 1;
          display: inline;
          border-radius: 5px;
        }
        .button--clear:focus {
          outline: 0;
        }
        .button--clear:hover {
          background-color: #eee;
        }

        .valid {
          background-color: #f0faf3 !important;
          border: 2px solid #9ee2b8 !important;
        }
        .invalid {
          background-color: #fbefee;
          border: 2px solid #ecaca5;
        }
      `}</style>
    </>
  )
}

TextArea.defaultProps = {
  placeholder: "Placeholder..."
}

export default TextArea
