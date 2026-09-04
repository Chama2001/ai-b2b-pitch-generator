from flask import Flask, request, jsonify
from flask_cors import CORS
# from prompts.proposal_prompts import get_b2b_proposal_prompt
# import google.generativeai as genai

app = Flask(__name__)
CORS(app)

@app.route('/api/generate-proposal', methods=['POST'])
def generate_proposal():
    try:
        data = request.json
        client_needs = data.get('client_needs')
        budget = data.get('budget', 'Negotiable')
        timeline = data.get('timeline', 'Flexible')

        if not client_needs:
            return jsonify({"error": "Client requirements are required to generate a proposal."}), 400

        # --- AI Integration Logic ---
        # prompt = get_b2b_proposal_prompt(client_needs, budget, timeline)
        # response = model.generate_content(prompt)
        # proposal_result = response.text
        
        # Simulated response for boilerplate
        proposal_result = f"""
        ### 1. EXECUTIVE SUMMARY
        Thank you for the opportunity to partner with your organization. Based on your requirements for '{client_needs}', we propose a scalable, future-proof digital solution tailored to optimize your workflows and drive measurable growth. Our enterprise-grade approach ensures high performance and security.

        ### 2. SCOPE OF WORK (SoW)
        *   **Phase 1: Discovery & Architecture:** Comprehensive analysis of current systems and UI/UX blueprinting.
        *   **Phase 2: Core Development:** Engineering the backend architecture and frontend interfaces.
        *   **Phase 3: Integration & QA:** Quality assurance testing and seamless API integrations.

        ### 3. PROJECT TIMELINE
        To meet your '{timeline}' expectation, we have structured an agile delivery roadmap:
        *   Weeks 1-2: Architecture & Design
        *   Weeks 3-6: Development Sprints
        *   Weeks 7-8: Testing & Final Deployment
        
        ### 4. INVESTMENT & ROI
        The total estimated investment for this robust solution aligns with your '{budget}' budget. This investment will drastically reduce manual overhead and improve system efficiency, yielding a positive ROI within the first two quarters of deployment.
        """
        
        return jsonify({"success": True, "proposal": proposal_result})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
