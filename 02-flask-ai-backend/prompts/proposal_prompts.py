def get_b2b_proposal_prompt(client_needs, budget, timeline):
    """
    Generates a structured prompt to create a winning B2B project proposal.
    """
    base_prompt = f"""
    You are an elite B2B Sales Strategist and Senior Solutions Architect.
    I need you to write a highly professional, persuasive Project Proposal for a prospective client.
    
    Client Requirements: '{client_needs}'
    Estimated Budget: '{budget}'
    Expected Timeline: '{timeline}'
    
    Please provide a structured proposal with the following sections:
    1. EXECUTIVE SUMMARY: A compelling introduction explaining how we will solve their problem and add value.
    2. SCOPE OF WORK (SoW): Bullet points detailing the exact deliverables and technical solutions.
    3. PROJECT TIMELINE: A phased breakdown of the project based on the '{timeline}' expectation.
    4. INVESTMENT & ROI: A professional breakdown of the '{budget}' budget and the expected Return on Investment for the client.
    
    Format the output using clear corporate headings and bullet points. Maintain a confident, persuasive, and enterprise-grade tone.
    """
    return base_prompt
