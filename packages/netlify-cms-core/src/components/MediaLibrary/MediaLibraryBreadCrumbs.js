import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from '@emotion/styled';
import { colors, borders, lengths, shadows, effects } from 'netlify-cms-ui-default';

const BreadCrumbsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
`
const BreadCrumbsItem = styled.div`
  display: flex;
`

const BreadCrumbsItemLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 6px 8px;
  background: #eff0f4;
  border-radius: 5px;
`

const BreadCrumbsItemDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

class MediaLibraryBreadcrumbs extends React.Component {
  render() {
    const {
      handleBreadcrumbClick,
      currentMediaFolder,
    } = this.props;
    var currentMediaFolderParts = currentMediaFolder.split('/');
    var breadcrumbsArray = currentMediaFolderParts.map((part, index) => {
      return {
        path: currentMediaFolderParts.slice(0, index+ 1).join('/'),
        label: part
      }
    });

    this.BreadCrumbsContent = breadcrumbsArray.map((item, index) => {
      return <BreadCrumbsItem key={index}>
        <BreadCrumbsItemLabel onClick={() => handleBreadcrumbClick(item.path)}>{item.label}</BreadCrumbsItemLabel>
        <BreadCrumbsItemDivider>/</BreadCrumbsItemDivider>
      </BreadCrumbsItem>
    })
    return (
      <BreadCrumbsContainer>
        {this.BreadCrumbsContent}
      </BreadCrumbsContainer>
    );
  }
}

MediaLibraryBreadcrumbs.propTypes = {
  handleBreadcrumbClick: PropTypes.func.isRequired,
  currentMediaFolder: PropTypes.string,
};

export default MediaLibraryBreadcrumbs;
