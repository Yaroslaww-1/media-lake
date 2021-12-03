﻿using MediaLakeCore.Application.Communities.GetCommunityPosts;
using MediaLakeCore.Application.Posts.GetPostsList;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediaLakeCore.API.Controllers.Communities.Posts
{
    [ApiController]
    [Route("communities/{communityId}/posts")]
    public class CommunityPostsController : ControllerBase
    {
        private readonly ISender _mediator;

        public CommunityPostsController(ISender mediator)
        {
            _mediator = mediator;
        }


        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<PostsListItemDto>), StatusCodes.Status200OK)]
        public async Task<IEnumerable<PostsListItemDto>> GetPosts([FromRoute] Guid communityId)
        {
            var result = await _mediator.Send(new GetCommunityPostsQuery(communityId));
            return result;
        }
    }
}